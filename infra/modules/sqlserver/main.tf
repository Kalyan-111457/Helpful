resource "azurerm_postgresql_flexible_server" "example" {
  name                   = var.sql_server_name
  resource_group_name    = var.resource_group_name
  location               = var.location

  version                = var.sql_server_version
  administrator_login    = var.sql_server_administrator_login
  administrator_password = var.sql_server_administrator_password
  storage_mb             = var.sql_server_storage_mb
  sku_name               = var.sql_server_sku_name
}

resource "azurerm_postgresql_flexible_server_database" "example" {
  name      = var.sql_database_name
  server_id = azurerm_postgresql_flexible_server.example.id
  collation = "en_US.utf8"
  charset   = "UTF8"

  # prevent the possibility of accidental data loss
  lifecycle {
    prevent_destroy = true
  }
}
