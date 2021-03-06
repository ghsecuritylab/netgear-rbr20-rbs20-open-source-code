# 
# Copyright (C) 2006 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
# $Id: Makefile 8682 2007-09-07 20:57:08Z nbd $

include $(TOPDIR)/rules.mk

PKG_NAME:=dnidnsmasq
PKG_VERSION:=2.39
PKG_RELEASE:=1

CONFIG_DNIDNSMASQ_GIT_TREEISH="dnsmasq-v2.39-dni20"
CONFIG_DNIDNSMASQ_GIT_REPOSITORY="dnsmasq.git"

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)

LOCAL_PKG_NAME_EXT:=dnidnsmasq

include $(INCLUDE_DIR)/package.mk

config-$(CONFIG_DNIDNSMASQ_SUP_PARENTAL_CTL)		+= --enable-parental_ctl_support
config-$(CONFIG_DNIDNSMASQ_SUP_STATIC_PPTP)		+= --enable-static_pptp_support
config-$(CONFIG_DNIDNSMASQ_SUP_USBSHARE_DOMAIN)		+= --enable-usbshare_domain_support
config-$(CONFIG_DNIDNSMASQ_SUP_IPV6_FEATURE)		+= --enable-dni_ipv6_feature
config-$(CONFIG_DNIDNSMASQ_BIND_SRVSOCK_TO_WAN)		+= --enable-bind_srvsock_to_wan
config-$(CONFIG_DNIDNSMASQ_START_WHEN_BOOT_UP)		+= --enable-start_dnsmasq_when_boot_up
config-$(CONFIG_PACKAGE_insight)	+= --enable-insight_log

define Package/dnidnsmasq
  SECTION:=net
  CATEGORY:=Base system
  TITLE:=A lightweight DNS and DHCP server
  URL:=http://www.thekelleys.org.uk/dnsmasq/
  DEPENDS:=+datalib
endef

define Package/dnidnsmasq/conffiles
/etc/dnsmasq.conf
endef

define Package/dnidnsmasq/description
 It is intended to provide coupled DNS and DHCP service to a LAN.
endef

define Package/dnidnsmasq/config
	menu "Configuration"
		depends on PACKAGE_dnidnsmasq
		source "$(SOURCE)/Config.in"
	endmenu
endef

define Build/Prepare
	$(CP) $(GIT_HOME)/dnsmasq.git/* $(PKG_BUILD_DIR)/
endef

define Build/Configure
	(cd $(PKG_BUILD_DIR); \
		./configure \
			$(config-y) \
	);
endef

define Build/Compile
	$(MAKE) -C $(PKG_BUILD_DIR) \
		$(TARGET_CONFIGURE_OPTS) \
		CFLAGS="$(TARGET_CFLAGS)" \
		LDFLAGS="-L$(STAGING_DIR)/usr/lib -L$(STAGING_DIR)/lib -lconfig" \
		BINDIR="/usr/sbin" MANDIR="/usr/man" \
		all
endef

define Package/dnidnsmasq/install
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/dns-hijack $(1)/usr/sbin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/src/dnsmasq $(1)/usr/sbin/
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/dnsmasq.conf $(1)/etc/dnsmasq.conf
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/dnsmasq.init $(1)/etc/init.d/dnsmasq
	$(INSTALL_DIR) $(1)/sbin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/mul_pppoe_dns $(1)/sbin/
	$(call Dni_Install_Ext,$(LOCAL_PKG_NAME_EXT),$(1))
endef

$(eval $(call BuildPackage,dnidnsmasq))
