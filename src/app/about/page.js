async function takeTime() {

    await new Promise(
        (resvole) => {

            setTimeout(resvole, 3000);
        }
    );
}

// Profile component (assuming it's in a separate file named Profile.js)
export default async function About() {
    await takeTime();
    throw new Error("This is manual error");
    return (
        <div>
            <h1>This is about route</h1>
        </div>
    );
}