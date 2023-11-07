# FULLSTACK: Angular, Node.js, Express, MongoDB Elégedettségi kérdőív adatai
Angular frontend + Node RESTful API backend, MongoDB adatbázis

## Könyvtár: backend-api
RESTful API-t tartalmazó könyvtár (Node.js, Express, MongoDb).
- Fogadja a szavazatokat és adatbázisba menti (MongoDB)
- Visszaadja a szavazás állását
- Visszajelzi, ha az adott IP címről már szavaztak
- FONTOS: .env file-ban (vagy environmentben) meg kell adni a saját MongoDB adatbázis eléréséhez szükséges connection stringet
```
CONNECTION_STRING=<MongoDB eléréséhez szükséges connection string>
```


## Könyvtár: frontend-szavazas  (Angular, TypeScript)
Ebben van a szavazás / már szavazott / szavazás ereményét megjelenítő oldal.
- Megjeleníti a szavazási oldalt
- Kijelzi, ha erről az IP címről már szavaztak
- Szavazás után megjeleníti a szavazások összesített eredményét


## Használata (development verzió, VS Code-dal):
1. Repository letöltése: git clone
2. Szükséges package-k telepítése: npm install
3. API-nak szükséges connection string megadása:  CONNECTION_STRING=<MongoDB eléréséhez szükséges>
4. API indítása (backend-api): npm run dev
5. Angular (frontend-szavazas): ng serve