import {
  Extension as ExtensionEvent,
  ExtensionVersion as ExtensionVersionEvent,
  ExtensionReview as ExtensionReviewEvent
} from "../generated/Contract/Contract"
import {
  Extension,
  ExtensionVersion,
  ExtensionReview
} from "../generated/schema"

export function handleExtension(event: ExtensionEvent): void {
  let entity = Extension.load(event.params.extension.hash)
  if (entity === null) {
    entity = new Extension(event.params.extension.hash)
  }

  entity.owner = event.params.owner
  entity.updated = event.params.extension.updated
  entity.size = event.params.extension.size
  entity.version = event.params.extension.version
  entity.category = event.params.extension.category
  entity.name = event.params.extension.name
  entity.hash = event.params.extension.hash
  entity.crx = event.params.extension.crx
  entity.iconURL = event.params.extension.iconURL
  entity.developer = event.params.extension.developer
  entity.overview = event.params.extension.overview
  entity.save()
}

export function handleExtensionVersion(event: ExtensionVersionEvent): void {
  let entity = new ExtensionVersion(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.hash = event.params.hash
  entity.version = event.params.version
  entity.crx = event.params.crx
  entity.save()
}

export function handleExtensionReview(event: ExtensionReviewEvent): void {
  let entity = new ExtensionReview(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.hash = event.params.hash
  entity.rating = event.params.rating
  entity.review = event.params.review
  entity.save()
}
