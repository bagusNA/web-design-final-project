import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

export default async function layoutMiddleware(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
): Promise<void> {
  const layout = to.meta.layout as string | null

  const layoutComponent = layout
    ? await import(`@/layouts/${layout}.vue`)
    : await import(`@/layouts/DefaultLayout.vue`)

  to.meta.layoutComponent = layoutComponent.default

  next()
}
