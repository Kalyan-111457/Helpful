module "resource_group" {
  source              = "../../modules/resource-group"
  resource_group_name = var.resource_group_name
  location            = var.location
}


module "storage_account" {
  source                = "../../modules/storage-account"
  resource_group_name   = module.resource_group.resource_group_name
  location              = module.resource_group.location
  storage_account_name  = var.storage_account_name
  storage_account_tier  = var.storage_account_tier
  storage_container_name = var.storage_container_name
}

module "sql_server" {
  source                          = "../../modules/sqlserver"
  resource_group_name             = module.resource_group.resource_group_name
  location                        = module.resource_group.location
  sql_server_name                 = var.sql_server_name
  sql_server_version              = var.sql_server_version
  sql_server_administrator_login    = var.sql_server_administrator_login
  sql_server_administrator_password = var.sql_server_administrator_password
  sql_server_storage_mb             = var.sql_server_storage_mb
  sql_server_sku_name               = var.sql_server_sku_name
  sql_database_name                = var.sql_database_name
}







