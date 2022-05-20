const SUPABASE_URL = 'https://yhletbviclmzgnzikzpu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobGV0YnZpY2xtemduemlrenB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTUzMjIsImV4cCI6MTk2Nzg3MTMyMn0.NSJ1Tw-LlfLsXJF4Y_nS3pwZV2TB7Ru8jvAsLxQLJWg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/list-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function createListItem(desire, abundance) {
    const response = await client.from('desires').insert({ desire, abundance });
    console.log(response);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function fetchListItems() {
    console.log('hello');
    const response = await client.from('desires').select('*');
    console.log(response);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
