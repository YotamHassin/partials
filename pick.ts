export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    result[key] = obj[key];
  });
  return result;
}

function run() {
    const t = pick({ a: 1, b: 'two', c: true }, 'a', 'c');
  interface SavedData {
    id: string;
    name: string;
    isPublished: boolean;
    fullText?: string; // Optional property
  }

  interface DisplayData {
    isEditing: boolean;
  }

  type CombinedData = SavedData & DisplayData;
  //{ }

  const fullData: CombinedData = {
    id: "123",
    name: "Article",
    isPublished: true,
    isEditing: false,
  };

  const savedData: SavedData = pick(fullData, 
    "id",
    "name",
    "isPublished",
    //"fullText",
  );

  console.log(savedData);
    // Output: { id: '123', name: 'Article', isPublished: true }

}

//run();
