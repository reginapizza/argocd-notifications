package services

import (
	"context"
	"fmt"
	"net/http"

	"github.com/opsgenie/opsgenie-go-sdk-v2/alert"
	"github.com/opsgenie/opsgenie-go-sdk-v2/client"
	log "github.com/sirupsen/logrus"

	httputil "github.com/argoproj-labs/argocd-notifications/pkg/util/http"
)

type OpsgenieOptions struct {
	ApiUrl  string            `json:"apiUrl"`
	ApiKeys map[string]string `json:"apiKeys"`
}

type opsgenieService struct {
	opts OpsgenieOptions
}

func NewOpsgenieService(opts OpsgenieOptions) NotificationService {
	return &opsgenieService{opts: opts}
}

func (s *opsgenieService) Send(notification Notification, dest Destination) error {
	apiKey, ok := s.opts.ApiKeys[dest.Recipient]
	if !ok {
		return fmt.Errorf("no API key configured for recipient %s", dest.Recipient)
	}
	alertClient, _ := alert.NewClient(&client.Config{
		ApiKey:         apiKey,
		OpsGenieAPIURL: client.ApiUrl(s.opts.ApiUrl),
		HttpClient: &http.Client{
			Transport: httputil.NewLoggingRoundTripper(
				httputil.NewTransport(s.opts.ApiUrl, false), log.WithField("service", "opsgenie")),
		},
	})
	_, err := alertClient.Create(context.TODO(), &alert.CreateAlertRequest{
		Message:     notification.Title,
		Description: notification.Body,
		Responders: []alert.Responder{
			{
				Type: "team",
				Id:   dest.Recipient,
			},
		},
		Source: "Argo CD",
	})
	return err
}
