// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StatusEnum = {
  "ONLINE": "ONLINE",
  "UNRESPONSIVE": "UNRESPONSIVE",
  "HOLIDAY": "HOLIDAY"
};

const LocationEnum = {
  "MYSEAT": "MYSEAT",
  "MEETING": "MEETING",
  "RECEPTION": "RECEPTION",
  "TELEWORK": "TELEWORK",
  "ANOTHER": "ANOTHER",
  "HOME": "HOME"
};

const { Home } = initSchema(schema);

export {
  Home,
  StatusEnum,
  LocationEnum
};