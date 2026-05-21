export type AffiliateItem = {
  name: string;
  normalUrl: string;
  affiliateUrl: string;
  isActive: boolean;
};

export const affiliateLinks = {
  udemy: {
    chatgptExcel: {
      name: "ChatGPT×Excel講座",
      normalUrl: "https://www.udemy.com/",
      affiliateUrl: "",
      isActive: false,
    },
  },
  canva: {
    top: {
      name: "Canva",
      normalUrl: "https://www.canva.com/",
      affiliateUrl: "",
      isActive: false,
    },
  },
  n8n: {
    top: {
      name: "n8n",
      normalUrl: "https://n8n.io/",
      affiliateUrl: "",
      isActive: false,
    },
  },
  make: {
    top: {
      name: "Make",
      normalUrl: "https://www.make.com/",
      affiliateUrl: "",
      isActive: false,
    },
  },
  amazon: {
    top: {
      name: "Amazon",
      normalUrl: "https://www.amazon.co.jp/",
      affiliateUrl: "",
      isActive: false,
    },
  },
  rakuten: {
    top: {
      name: "楽天市場",
      normalUrl: "https://www.rakuten.co.jp/",
      affiliateUrl: "",
      isActive: false,
    },
  },
  template: {
    top: {
      name: "自作テンプレート",
      normalUrl: "/articles",
      affiliateUrl: "",
      isActive: false,
    },
  },
} as const;

type AffiliateLinks = typeof affiliateLinks;
type AffiliateGroup = keyof AffiliateLinks;
type AffiliateKey<TGroup extends AffiliateGroup> = keyof AffiliateLinks[TGroup];

export function getAffiliateItem<TGroup extends AffiliateGroup>(
  group: TGroup,
  key: AffiliateKey<TGroup>,
): AffiliateItem {
  return affiliateLinks[group][key] as AffiliateItem;
}

export function getAffiliateUrl<TGroup extends AffiliateGroup>(
  group: TGroup,
  key: AffiliateKey<TGroup>,
) {
  const item = getAffiliateItem(group, key);
  return item.isActive && item.affiliateUrl ? item.affiliateUrl : item.normalUrl;
}
