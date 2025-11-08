// https://www.freecodecamp.org/news/event-based-architectures-in-javascript-a-handbook-for-devs/

import EventEmitter from "events";

//
const emitterBasicExample = () => {
  const emitter = new EventEmitter();

  // Subscriber (listener)
  emitter.on("dataReceived", (data) => {
    console.log(`Data received: ${data}`);
  });

  // Publisher (emitter)
  emitter.emit("dataReceived", "User profile loaded");
};

// Define a mapping from event names to their argument types
export type EventMap = Record<string, any[]>;

// helper type to extract the "detail" type for an event key
export type EventDetail<E extends EventMap, K extends keyof E> = E[K] extends [
  infer Only
]
  ? Only
  : E[K];


export class TypedEventEmitter<
  Events extends EventMap
> extends (EventEmitter as {
  new (): EventEmitter;
}) {
  // typed overload for known events
  on<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void
  ): this;
  // fallback overload to match base EventEmitter signature
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  on(event: any, listener: any): this {
    return super.on(event as any, listener as (...args: any[]) => void);
  }

  once<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void
  ): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: any, listener: any): this {
    return super.once(event as any, listener as (...args: any[]) => void);
  }

  off<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void
  ): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;
  off(event: any, listener: any): this {
    return super.off(event as any, listener as (...args: any[]) => void);
  }

  emit<K extends keyof Events>(event: K, ...args: Events[K]): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;
  emit(event: any, ...args: any[]): boolean {
    return super.emit(event as any, ...(args as any[]));
  }

  /**
   * Create a DOM-like CustomEvent from a typed event name + CustomEventInit payload.
   * The init.detail will be typed according to the event's tuple:
   * - If the event tuple has a single element, detail is that element's type
   * - If the event tuple has multiple elements, detail can be an array of those elements
   */
  createCustomEvent<K extends keyof Events>(
    event: K,
    init?: CustomEventInit<EventDetail<Events, K>>
  ): CustomEvent<EventDetail<Events, K>> {
    return new CustomEvent(String(event), init as any);
  }

  /**
   * Dispatch a CustomEvent through this emitter.
   * Overloads:
   * - dispatchEvent(eventName, init?) builds a CustomEvent and dispatches it
   * - dispatchEvent(CustomEvent) dispatches the event
   *
   * When a CustomEvent is dispatched, its detail is converted to emit(...) args:
   * - undefined => no args
   * - array => spread as multiple args
   * - otherwise => single arg
   */
  dispatchEvent<K extends keyof Events>(
    event: K,
    init?: CustomEventInit<EventDetail<Events, K>>
  ): boolean;
  dispatchEvent(event: CustomEvent<any>): boolean;
  dispatchEvent(eventOrName: any, maybeInit?: any): boolean {
    if (typeof eventOrName === "string" || typeof eventOrName === "symbol") {
      const ev = new CustomEvent(String(eventOrName), maybeInit);
      return this.dispatchEvent(ev);
    }

    if (!(eventOrName instanceof CustomEvent)) return false;

    const detail = eventOrName.detail;
    const args: any[] =
      detail === undefined ? [] : Array.isArray(detail) ? detail : [detail];

    return (this.emit as any)(eventOrName.type, ...args);
  }
}


// Define your app-specific events and their parameter tuple types
type AppEvents = {
  // single string param
  dataReceived: [string];
  // object param
  userUpdated: [{ id: string; name: string }];
  // multiple params example
  progress: [number, string];

  userLoggedIn: [{ name: string }];
};

// --- usage example adjusted to use CustomEventInit detail ---
const usageTypedEventEmitter = () => {
  const emitter = new TypedEventEmitter<AppEvents>();

  // Typed subscriber (listener)
  emitter.on("dataReceived", (message) => {
    console.log(`Data received: ${message}`);
  });

  emitter.on("userUpdated", (user) => {
    console.log(`User updated: ${user.id} (${user.name})`);
  });

  emitter.on("progress", (percent, status) => {
    console.log(`Progress: ${percent}% - ${status}`);
  });

  // Typed publisher (emitter)
  emitter.emit("dataReceived", "User profile loaded");
  emitter.emit("userUpdated", { id: "u1", name: "Alice" });
  emitter.emit("progress", 42, "halfway");

  // createCustomEvent now accepts a CustomEventInit with a typed 'detail'
  const userEvent = emitter.createCustomEvent("userLoggedIn", {
    detail: { name: "Alice" },
  });

  // listeners still receive a typed payload
  emitter.on("userLoggedIn", (e) => {
    console.log(`Welcome, ${e.name}!`);
  });

  // dispatch the typed CustomEvent
  emitter.dispatchEvent(userEvent);

  // or dispatch directly by event name + init
  emitter.dispatchEvent("userLoggedIn", { detail: { name: "Bob" } });

  const userEvent1 = new CustomEvent("userLoggedIn:AndThemSome", {
    detail: { name: "Alice" },
  });

  emitter.dispatchEvent(userEvent1);
};
