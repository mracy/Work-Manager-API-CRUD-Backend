"use client"

export default function Info() {

    console.log("this is component");

    return (
        <div>
            <h1>This is info comomponents</h1>
            <p>By adding these console.log statements, you can check the values of variables at different points in your code. This will help you identify any potential issues or unexpected behaviors during the execution of the PUT function.</p>
            <button className="px-3 py-2 rounded bg-blue-600">Click me</button>
        </div>
    );
}