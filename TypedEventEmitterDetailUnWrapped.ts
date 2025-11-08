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

export class TypedEventEmitterDetailUnWrapped<
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

  // typed overload for known events
  once<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void
  ): this;
  // fallback overload to match base EventEmitter signature
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: any, listener: any): this {
    return super.once(event as any, listener as (...args: any[]) => void);
  }

  // typed overload for known events
  off<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void
  ): this;
  // fallback overload to match base EventEmitter signature
  off(event: string | symbol, listener: (...args: any[]) => void): this;
  off(event: any, listener: any): this {
    return super.off(event as any, listener as (...args: any[]) => void);
  }

  // typed overload for known events
  emit<K extends keyof Events>(event: K, ...args: Events[K]): boolean;
  // fallback overload to match base EventEmitter signature
  emit(event: string | symbol, ...args: any[]): boolean;
  emit(event: any, ...args: any[]): boolean {
    return super.emit(event as any, ...(args as any[]));
  }

  /**
   * Create a DOM-like CustomEvent from a typed event name + detail payload.
   * If the event's tuple type has a single element, the detail will be that element.
   * If the event's tuple type has multiple elements, you may pass an array as the detail.
   */
  createCustomEvent<K extends keyof Events>(
    event: K,
    detail: Events[K] extends [infer Only] ? Only : Events[K]
  ): CustomEvent<Events[K] extends [infer Only] ? Only : Events[K]> {
    return new CustomEvent(String(event), { detail: detail as any });
  }

  /**
   * Dispatch a CustomEvent through this emitter.
   * - If detail is an array it will be spread into emit(...)
   * - If detail is undefined it will emit the event with no args
   * - Otherwise detail will be passed as a single argument
   */
  dispatchEvent<K extends keyof Events>(
    event: CustomEvent<Events[K] extends [infer Only] ? Only : Events[K]>
  ): boolean;
  dispatchEvent(event: CustomEvent<any>): boolean;
  dispatchEvent(event: any): boolean {
    if (!(event instanceof CustomEvent)) return false;

    const detail = event.detail;
    const args: any[] =
      detail === undefined ? [] : Array.isArray(detail) ? detail : [detail];

    // use a loose cast to call emit with dynamic args
    return (this.emit as any)(event.type, ...args);
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

// Example usage of TypedEventEmitter with CustomEvent support
const usageofTypedEventEmitter = () => {
  const emitter = new TypedEventEmitterDetailUnWrapped<AppEvents>();

  // Typed subscriber (listener)
  emitter.on("dataReceived", (message) => {
    // message is inferred as string
    console.log(`Data received: ${message}`);
  });

  emitter.on("userUpdated", (user) => {
    // user is inferred as { id: string; name: string }
    console.log(`User updated: ${user.id} (${user.name})`);
  });

  emitter.on("progress", (percent, status) => {
    // percent: number, status: string
    console.log(`Progress: ${percent}% - ${status}`);
  });

  // Typed publisher (emitter)
  emitter.emit("dataReceived", "User profile loaded");
  emitter.emit("userUpdated", { id: "u1", name: "Alice" });
  emitter.emit("progress", 42, "halfway");

  // If you try to use an incorrect shape the compiler will complain:
  // emitter.emit('dataReceived', 123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

  // https://stackoverflow.com/questions/6274339/how-can-i-create-a-peekable-generator-in-javascript
  // https://stackoverflow.com/questions/45189556/typescript-generator-function-with-specific-yield-type

  /* Example TypeScript code demonstrating a generator and a peekable iterator wrapper */
  const userEvent = emitter.createCustomEvent("userLoggedIn", {
    name: "Alice",
  });

  emitter.on("userLoggedIn", (e) => {
    console.log(`Welcome, ${e.name}!`);
  });

  emitter.dispatchEvent(userEvent);
};
