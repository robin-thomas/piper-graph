// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Extension extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Extension entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Extension entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Extension", id.toString(), this);
  }

  static load(id: string): Extension | null {
    return store.get("Extension", id) as Extension | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get updated(): BigInt {
    let value = this.get("updated");
    return value.toBigInt();
  }

  set updated(value: BigInt) {
    this.set("updated", Value.fromBigInt(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }

  get version(): string {
    let value = this.get("version");
    return value.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get crx(): string {
    let value = this.get("crx");
    return value.toString();
  }

  set crx(value: string) {
    this.set("crx", Value.fromString(value));
  }

  get iconURL(): string {
    let value = this.get("iconURL");
    return value.toString();
  }

  set iconURL(value: string) {
    this.set("iconURL", Value.fromString(value));
  }

  get developer(): string {
    let value = this.get("developer");
    return value.toString();
  }

  set developer(value: string) {
    this.set("developer", Value.fromString(value));
  }

  get overview(): string {
    let value = this.get("overview");
    return value.toString();
  }

  set overview(value: string) {
    this.set("overview", Value.fromString(value));
  }
}

export class ExtensionVersion extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExtensionVersion entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExtensionVersion entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExtensionVersion", id.toString(), this);
  }

  static load(id: string): ExtensionVersion | null {
    return store.get("ExtensionVersion", id) as ExtensionVersion | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get crx(): string {
    let value = this.get("crx");
    return value.toString();
  }

  set crx(value: string) {
    this.set("crx", Value.fromString(value));
  }
}

export class ExtensionReview extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExtensionReview entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExtensionReview entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExtensionReview", id.toString(), this);
  }

  static load(id: string): ExtensionReview | null {
    return store.get("ExtensionReview", id) as ExtensionReview | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get rating(): BigInt {
    let value = this.get("rating");
    return value.toBigInt();
  }

  set rating(value: BigInt) {
    this.set("rating", Value.fromBigInt(value));
  }

  get review(): string {
    let value = this.get("review");
    return value.toString();
  }

  set review(value: string) {
    this.set("review", Value.fromString(value));
  }
}
