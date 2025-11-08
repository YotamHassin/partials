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

export class TypedEventEmitter<Events extends EventMap> extends (EventEmitter as {
  new (): EventEmitter;
}) {
  // typed overload for known events
  on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
  // fallback overload to match base EventEmitter signature
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  on(event: any, listener: any): this {
    return super.on(event as any, listener as (...args: any[]) => void);
  }

  // typed overload for known events
  once<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
  // fallback overload to match base EventEmitter signature
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: any, listener: any): this {
    return super.once(event as any, listener as (...args: any[]) => void);
  }

  // typed overload for known events
  off<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
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
}

// Define your app-specific events and their parameter tuple types
type AppEvents = {
  // single string param
  dataReceived: [string];
  // object param
  userUpdated: [{ id: string; name: string }];
  // multiple params example
  progress: [number, string];
};

const emitter = new TypedEventEmitter<AppEvents>();

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
