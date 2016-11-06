/**
 * Created by apdun on 11/5/2016.
 */
function saveCompanyList() {
    var db = new Dexie("MyDatabase");
    db.version(1).stores({
        friends: "++id, campanyName, age, *tags",
        gameSessions: "id, score"
    });

}
