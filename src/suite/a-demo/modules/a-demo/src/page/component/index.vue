<template>
  <template></template>
</template>

<script setup lang="ts">
import { useControllerPage } from 'zova';
import { ControllerPageComponent } from './controller.js';
import { RenderPageComponent } from './render.jsx';
useControllerPage(ControllerPageComponent, RenderPageComponent);
</script>
