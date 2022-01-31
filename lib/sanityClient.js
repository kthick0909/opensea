import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ezar2vc7',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skQlHzZim8tYTUDBtVg351QG1EleHiAOUgnHcUF6eztENVAYDFmEdtS5bD79UJNcL7fEic6Z7e3V4FX8kn4wKl7InlkMG1RNxCYWjgqN8KJlmrWy7muQYJZtudCCz6o4krxPn4IbeGmTQtFYFQJcMfU6c5XpW4RlGCBEiISrnlJAgpHRvHu7',
  useCdn: false,
})
