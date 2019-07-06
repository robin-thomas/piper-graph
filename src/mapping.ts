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
  let entity = Extension.load(event.params.param1.hash)
  if (entity === null) {
    entity = new Extension(event.params.param1.hash)
  }

  entity.owner = event.params.param0
  entity.rating = event.params.param1.rating
  entity.reviews = event.params.param1.reviews
  entity.downloads = event.params.param1.downloads
  entity.updated = event.params.param1.updated
  entity.size = event.params.param1.size
  entity.hash = event.params.param1.hash
  entity.developer = event.params.param1.developer
  entity.developerETH = event.params.param1.developerETH
  entity.name = event.params.param1.name
  entity.overview = event.params.param1.overview
  entity.category = event.params.param1.category
  entity.version = event.params.param1.version
  entity.iconURL = event.params.param1.iconURL
  entity.crx = event.params.param1.crx
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
  entity.rating = event.params.rating
  entity.hash = event.params.hash
  entity.review = event.params.review
  entity.save()
}
