variable "app_name" {
  description = "The name of the web app"
  type        = string
}

variable "app_service_plan_sku" {
  description = "The SKU of the App Service Plan"
  type        = string
  default     = "B1"
}

variable "app_service_plan_os_type" {
  description = "The OS type of the App Service Plan"
  type        = string
  default     = "Linux"
}

variable "linux_web_app_name" {
  description = "The name of the Linux web app."
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group."
  type        = string
}

variable "location" {
  description = "The Azure location for the App Service resources."
  type        = string
}
