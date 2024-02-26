<script setup lang="ts">
import { z } from "zod";
import clsx from "clsx";

import type { FormSubmitEvent } from "#ui/types";

const { fullPath } = useRoute();

useSeoMeta({
  title: "Contact - Matthieu Siegel",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: fullPath,
    },
  ],
});

const mailResult: Ref = ref(undefined);

const schema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email"),
  subject: z.string().max(70),
  message: z.string().max(3000),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  mailResult.value = await $fetch("/api/contact", {
    method: "POST",
    body: state,
  });

  setTimeout(() => (mailResult.value = undefined), 3000);

  state.name = undefined;
  state.email = undefined;
  state.subject = undefined;
  state.message = undefined;
}
</script>

<template>
  <div class="static">
    <h1 class="text-5xl font-semibold text-center py-10">Contact 💬</h1>
    <p class="text-center pb-10 text-lg">
      Feel free to contact me if you're looking for a Software Engineer, a
      DevOps professional, or just to have a chat !
    </p>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 px-3 mx-auto md:w-2/3 md:px-0"
      @submit="onSubmit"
    >
      <UFormGroup label="Your name" name="name">
        <UInput v-model="state.name" size="md" />
      </UFormGroup>

      <UFormGroup label="Your email" name="email">
        <UInput v-model="state.email" type="email" size="md" />
      </UFormGroup>

      <UFormGroup label="Subject" name="subject">
        <UInput v-model="state.subject" type="subject" size="md" />
      </UFormGroup>

      <UFormGroup label="Message" name="message">
        <UTextarea
          v-model="state.message"
          type="message"
          size="md"
          :rows="6"
          resize
        />
      </UFormGroup>

      <UButton class="" type="submit" size="lg"> Submit </UButton>
    </UForm>
    <UAlert
      :class="
        clsx(
          `absolute w-1/4 right-20 bottom-20 opacity-100 transition-opacity ease-in-out delay-150 duration-300`,
          mailResult?.success ? `opacity-100` : `opacity-0`
        )
      "
      icon="i-heroicons-envelope"
      color="green"
      variant="solid"
      title="Well done, email sent!"
    />
  </div>
</template>

<style scoped></style>
