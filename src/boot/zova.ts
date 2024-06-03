/* eslint-disable */
//import { boot } from 'quasar/wrappers';
import { App } from 'vue';
import { PluginZova } from 'zova';
import { modulesMeta } from '../../.quasar/zova/modules-meta.js';
import { AppMonkey } from '../front/config/monkey.js';
import { locales } from '../front/config/locales.js';
import config from '../../.quasar/zova/config.js';
import { Router } from 'vue-router';

export default async function ({ app, router }: { app: App; router: Router }) {
  app.provide('a-router:appRouter', router);
  await PluginZova.install(app, { modulesMeta, AppMonkey, locales, config });
}
