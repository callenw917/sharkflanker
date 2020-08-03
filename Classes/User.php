<?php
class User {
    private $user;
    private $id;

    public function __construct($connection){
        $this->connection =$connection;
        $user_query = mysqli_query($connection, "INSERT INTO USERS VALUES('')");
        $this->id = mysqli_insert_id($connection);
    }

    public function getID() {
        return $this->id;
    }
}

?>