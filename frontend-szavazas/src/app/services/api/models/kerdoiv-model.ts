export interface KerdoivModel {
    id?: number,			// adatbázisba íráskor kapjuk vissza
    ip?: string,			// adatbázisba írás előtt az API állítja be
    minoseg?: number,
    gyorsasag?: number,
    ar?: number
}	
