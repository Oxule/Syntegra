ALTER TABLE endpoints
ADD request_data jsonb NOT NULL,
ADD response_data jsonb NOT NULL;
