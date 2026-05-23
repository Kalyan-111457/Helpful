variable "resource_group_name" {
  description = "The name of the resource group to create."
  type        = string  
}

variable "location" {
  description = "The location where the resource group will be created."
  type        = string
}

variable "sql_server_name" {
  description = "The name of the SQL Server to create."
  type        = string
}

variable "sql_server_administrator_login" {
  description = "The administrator login name for the SQL Server."
  type        = string
}

variable "sql_server_administrator_password" {
  description = "The administrator password for the SQL Server."
  type        = string
  sensitive   = true
}

variable "sql_server_version" {
  description = "The version of the SQL Server to create."
  type        = string
  default     = "12.0"
}


variable "sql_server_sku_name" {
  description = "The SKU name for the SQL Server."
  type        = string
  default     = "GP_Standard_D4s_v3"
}


variable "sql_server_storage_mb" {
  description = "The storage size in MB for the SQL Server."
  type        = number
  default     = 32768
}


variable "sql_database_name" {
  description = "The name of the SQL Database to create."
  type        = string
}




variable "storage_account_name" {
    description = "The name of the storage account to create."
    type        = string
}

variable "storage_account_tier" {
    description = "The tier of the storage account to create."
    type        = string
    default     = "Standard"
}


variable "storage_container_name" {
    description = "The name of the storage container to create."
    type        = string
}


variable "client_id" {
  description = "The client ID for Azure authentication."
  type        = string
}

variable "client_secret" {
  description = "The client secret for Azure authentication."
  type        = string
  sensitive   = true
}

variable "tenant_id" {
  description = "The tenant ID for Azure authentication."
  type        = string
}

variable "subscription_id" {
  description = "The subscription ID for Azure authentication."
  type        = string
}

