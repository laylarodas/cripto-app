import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string()
});


export const CryptoCurrencySchema = z.object({
  CoinInfo: z.object({
    Name: z.string(),
    FullName: z.string()
  }),
})

export const CryptoCurrenciesSchema = z.array(CryptoCurrencySchema);


export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string()
});


export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string()
  
})