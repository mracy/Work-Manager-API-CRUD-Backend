import { Children } from "react";

export default function ProfileLayout({children}) {
    return(
    <div>
        <h1>This is Profile header</h1>
        {children}
        <h1>This is profile footer</h1>
    </div>
    );
}