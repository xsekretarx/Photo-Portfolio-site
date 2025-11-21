import ‘./globals.css’

export const metadata = {
title: ‘Denis Mikhin - Photographer’,
description: ‘Photography portfolio by Denis Mikhin’,
}

export default function RootLayout({ children }) {
return (
<html lang="ru">
<body>{children}</body>
</html>
)
}
