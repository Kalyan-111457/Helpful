resource "azurerm_service_plan" "example" {
  name                = var.app_name
  resource_group_name = var.resource_group_name
  location            = var.location
  os_type             = var.app_service_plan_os_type
  sku_name            = var.app_service_plan_sku
}

resource "azurerm_linux_web_app" "example" {
  name                = var.linux_web_app_name
  resource_group_name = var.resource_group_name
  location            = var.location
  service_plan_id     = azurerm_service_plan.example.id

  site_config {}
}
