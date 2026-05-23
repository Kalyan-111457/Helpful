variable "resource_group_name"{
    description = "The name of the resource group to create."
    type        = string
}

variable "location" {
    description = "The location where the resource group will be created."
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
