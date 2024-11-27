const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu(controller = null) {
  if (controller?.current) controller.current.abort(); // Abort if a controller exists
  if (controller) controller.current = new AbortController(); // Initialize new AbortController if provided

  try {
    const res = await fetch(`${API_URL}/menu`, {
      signal: controller?.current?.signal, // Pass signal if controller exists
    });

    if (!res.ok) throw Error('Failed getting menu');

    const { data } = await res.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      throw err;
    }
  }
}

export async function getOrder(id, controller = null) {
  if (controller?.current) controller.current.abort();
  if (controller) controller.current = new AbortController();

  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      signal: controller?.current?.signal,
    });

    if (!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = await res.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      throw err;
    }
  }
}

export async function createOrder(newOrder, controller = null) {
  if (controller?.current) controller.current.abort();
  if (controller) controller.current = new AbortController();

  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller?.current?.signal,
    });

    if (!res.ok) throw Error();

    const { data } = await res.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      throw Error('Failed creating your order');
    }
  }
}

export async function updateOrder(id, updateObj, controller = null) {
  if (controller?.current) controller.current.abort();
  if (controller) controller.current = new AbortController();

  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller?.current?.signal,
    });

    if (!res.ok) throw Error();
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      throw Error('Failed updating your order');
    }
  }
}
