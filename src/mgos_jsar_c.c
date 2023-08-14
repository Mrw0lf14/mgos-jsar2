#include "mgos.h"
#include "mgos_jsar.h"

#define LED_PIN (2)

bool  mgos_mgos_jsar_init(void) 
{
  mgos_gpio_set_mode(LED_PIN, MGOS_GPIO_MODE_OUTPUT);
  
  /* Begingit  */
  if (mgos_jsar_begin() != 0) {
    LOG(LL_ERROR, ("JsAr begin: FAILED")); 
  } else {
    LOG(LL_ERROR, ("JsAr begin: SUCCESS")); 
  }

  /* Ethernet */
  if (mgos_sys_config_get_user_lan_enable() == true) {
    LOG(LL_INFO, ("JsAr init - Eth enable")); 
    mgos_jsar_enableEthernet();

    mgos_sys_config_set_eth_enable(true);
    mgos_ethernet_init();
    mgos_sys_config_set_eth_enable(false);
  }

  /* Can */
  if (mgos_sys_config_get_user_can_enable() == true) {
    LOG(LL_INFO, ("JsAr init - CAN enable")); 
    mgos_jsar_enableCanModule();
  }

  /* IrTx */
  if (mgos_sys_config_get_user_irtx_enable() == true) {
    LOG(LL_INFO, ("JsAr init - IrTx enable")); 
    mgos_jsar_enableIrTx();
  }

  /* IrRx */
  if (mgos_sys_config_get_user_irrx_enable() == true) {
    LOG(LL_INFO, ("JsAr init - IrRx enable")); 
    mgos_jsar_enableIrRx();
  }

    /* SPI */
  switch (mgos_sys_config_get_user_spi_enable()) {
  case 1:
    mgos_jsar_enableSpiPins3V3Mode();
    LOG(LL_INFO, ("JsAr init - SPI 3V3 Mode ")); 
    break;
  case 2:
    mgos_jsar_enableSpiPinsFast3V3Mode();
    LOG(LL_INFO, ("JsAr init - SPI Fast 3V3 Mode ")); 
    break;
  case 3:
    mgos_jsar_enableSpiPins5VMode();
    LOG(LL_INFO, ("JsAr init - SPI 5V Mode ")); 
    break;
  case 4: 
    mgos_jsar_enableSpiPinsFast5VMode();
    LOG(LL_INFO, ("JsAr init - SPI Fast5V Mode ")); 
    break; 
  default:
    mgos_jsar_disableSpiPins();
    break;
  }  

  /* SDCard */
  switch (mgos_sys_config_get_user_sdcard_enable()) {
  case 1:
    mgos_jsar_enableSDPort1BitMode();
    LOG(LL_INFO, ("JsAr init - SDPort 1Bit Mode")); 
    break;
  case 2:
    mgos_jsar_enableSDPort4BitMode();
    LOG(LL_INFO, ("JsAr init - SDPort 4Bit Mode")); 
    break;
  case 3:
    mgos_jsar_enableSDPortSpiMode();
    LOG(LL_INFO, ("JsAr init - SDPort Spi Mode")); 
    break;

  default:
    mgos_jsar_disableSDPort();
    break;
  }  

  return true;
}

