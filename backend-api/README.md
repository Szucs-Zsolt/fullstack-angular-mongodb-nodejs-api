# FULLSTACK: Angular, Node.js, Express, MongoDB Elégedettségi kérdőív adatai

## Angular frontend + Node RESTful API backend, MongoDB adatbázis


# API: Az elégedettségi kérdőívre adott válaszok adatbázisba mentésére és kiolvasására alkalmas API.
## Node.js RESTful API indítása
```bash
  cd backend-api 
  npm run dev
```

## API végpontjai
  1. POST /kerdoiv/bekuldes
	Payload json formában tartalmazza a szolgáltatás értékelését: minoseg, gyorsaság, ár
	- Status: 400 és hibaüzenet json formában, ha az adatok hiányoznak, vagy nem 1-5 közé esnek
	- Siker esetén visszaadja a lementett adatot (_id -vel együtt)
	- Hibaüzenet, ha erről az IP-ről már szavaztak, de beírja az adatbázisba.
  3. GET /kerdoiv/letoltes
	Visszaadja az adatbázis teljes tartalmát json formában
  4. GET /kerdoiv/szavazott
	Visszaadja, hogy a request-et küldő IP-címről szavaztak-e már
  5. GET /kerdoiv/eredmeny
	A szavazás állása, és hogy hányan szavaztak már.
## FONTOS: 
A .env file nem része a repository-nak, mivel ez tartalmazza majd a titkos adatokat, ebben az
esetben a connection string-et. A fejlesztés során MongoDB Atlas cloud database-t használtam.
```
Connection string megadása a .env file-ban:
	CONNECTION_STRING=<MongoDB eléréséhez szükséges connection string>
```

## API HASZNÁLATA (git clone után)
```
  1. Helye:
	cd backend-api 
  2. Szükséges packege-ek telepítése: 
	npm install	
  3. Development módban való indítása:  
	npm run dev			

## EGYÉB:
   Environmentben, vagy .env file-ban megadható a SERVER_PORT=<használni kívánt port száma>	
   
   Ha nincs megadva, akkor a használt port száma: 5000 (pl. localhost:5000/kerdoiv/bekuldes)
