import React from 'react'

export default () => (
<div class="container">
<h3>Please complete this form to connect database:</h3>
<form action ="dbconnect.php" method = "post" class="form-inline">
<p>Hostname:
<input type="text" name="hostname" class="form-control" size="20"  placeholder="Please input hostname"/></p>	
<p>Database: 
<input type="text" class="form-control" name="databasename" size="20" placeholder="database name" />
</p>
<p>Username:
<input type="text" name="user" class="form-control" size="20"  placeholder="Please input user name"/></p>
<p>Password: 
<input type="password" class="form-control" name="password" size="20" placeholder="password" /></p>
<input type="submit" name="submit" class="btn btn-info" value="Connect" />

</form>
</div>
);
