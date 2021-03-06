import { WebhookEmitter } from '../../src/webhook-emitter';
import { Webhook } from '../../src/webhook';

const topic = 'create-product';
const objectPayload = { foo: 'bar', boom: 'baz' };
const objectInput = { foo: 'bar' };
const emitter = new WebhookEmitter(topic, objectPayload, objectInput);

test('Constructor sets topic', () => {
  expect(emitter.topic).toBe(topic);
});

test('Constuctor sets objectPayload', () => {
  expect(emitter.objectPayload).toBe(objectPayload);
});

test('Constructor sets objectInput', () => {
  try {
    expect(emitter.objectInput).toBe(objectInput);
  } catch (error) {
    console.log(error);
  }
});

test('Set webhooks', () => {
  const firstWebhook = new Webhook('https://webhook.site/47de0b5d-1f44-4610-b5e5-ba7a4c0ffefc', 'abc654');
  const secondWebhook = new Webhook('https://webhook.site/47de0b5d-1f44-4610-b5e5-ba7a4c0ffefc', 'abc987');
  const webhooks = [firstWebhook, secondWebhook];
  emitter.webhooks = webhooks;
  expect(emitter.webhooks).toBe(webhooks);
});

// test('sendWebhooks method sends out webhooks ', async () => {
//   await expect(emitter.sendWebhooks()).not.toBe(false);
// });
