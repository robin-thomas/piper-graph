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
  // Create new entity if it doesnt exist.
  // Else update the entity.
  let entity = Extension.load(event.params.param0.extension.hash)
  if (entity === null) {
    entity = new Extension(event.params.param0.extension.hash)
  }

  entity.hash = event.params.param0.extension.hash
  entity.developer = event.params.param0.extension.developer
  entity.developerETH = event.params.param0.extension.developerETH
  entity.name = event.params.param0.extension.name
  entity.overview = event.params.param0.extension.overview
  entity.category = event.params.param0.extension.category
  entity.version = event.params.param0.extension.version
  entity.size = event.params.param0.extension.size
  entity.iconURL = event.params.param0.extension.iconURL
  entity.crx = event.params.param0.extension.crx
  entity.rating = event.params.param0.extension.rating
  entity.reviews = event.params.param0.extension.reviews
  entity.downloads = event.params.param0.extension.downloads
  entity.updated = event.params.param0.extension.updated
  entity.owner = event.params.param0.owner
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
  entity.review = event.params.review
  entity.rating = event.params.rating
  entity.save()
}
