const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint);
  const updatedCount = count + 1;
  weakMap.set(endpoint, updatedCount);

  if (updatedCount >= 5) {
    throw new Error(`Endpoint load is high for ${endpoint.name}`);
  }

  console.log(`Querying API for ${endpoint.name}. Count: ${updatedCount}`);
}

const endpoint1 = {
  protocol: 'http',
  name: 'getUsers',
};
const endpoint2 = {
  protocol: 'https',
  name: 'getPosts',
};

for (let i = 0; i < 7; i++) {
  try {
    queryAPI(endpoint1);
  } catch (error) {
    console.error(error.message);
  }
}

for (let i = 0; i < 3; i++) {
  try {
    queryAPI(endpoint2);
  } catch (error) {
    console.error(error.message);
  }
}
