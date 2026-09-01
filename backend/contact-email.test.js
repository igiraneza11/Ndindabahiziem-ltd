const test = require('node:test');
const assert = require('node:assert/strict');

const { resolveDeliveryStrategy } = require('./index.js');

test('prefers Resend when API key is configured', () => {
  assert.equal(resolveDeliveryStrategy({ RESEND_API_KEY: 'abc' }), 'resend');
});

test('falls back to FormSubmit when SMTP is missing', () => {
  assert.equal(
    resolveDeliveryStrategy({
      RESEND_API_KEY: '',
      SMTP_HOST: '',
      SMTP_USER: '',
      SMTP_PASSWORD: '',
      OWNER_EMAIL: 'owner@example.com',
    }),
    'formsubmit'
  );
});

test('uses SMTP when the mailer config is complete', () => {
  assert.equal(
    resolveDeliveryStrategy({
      RESEND_API_KEY: '',
      SMTP_HOST: 'smtp.gmail.com',
      SMTP_USER: 'user@example.com',
      SMTP_PASSWORD: 'app-password',
      OWNER_EMAIL: 'owner@example.com',
    }),
    'smtp'
  );
});
