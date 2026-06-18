/* מאפשרות למשתמש להזריק (Inject) הגדרות גלובליות. */
export type Id = string | number;

export type IdGenerator = () => Id;

const defaultIdGenerator: IdGenerator = () => 
    Math.random().toString(36).substr(2, 9);

let idGenerator: IdGenerator = defaultIdGenerator;

export const setCustomIdGenerator = (generator: IdGenerator = defaultIdGenerator) => {
  idGenerator = generator;
};

export const generateId: IdGenerator = (): Id => idGenerator();
