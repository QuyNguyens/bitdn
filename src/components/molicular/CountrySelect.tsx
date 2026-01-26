'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';

type CountryOption = {
  key: string; // cca2
  label: string; // country name
};

type CountrySelectProps = {
  value?: string; // cca2 hiện tại (VD: 'VN')
  onChange?: (value: string) => void;
  isRequired?: boolean;
  name?: string;
};

const CountrySelect = ({
  value,
  onChange,
  isRequired = true,
  name = 'country',
}: CountrySelectProps) => {
  const {t} = useI18n();
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCountries() {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2');

    const data = await res.json();

    return data
      .map((c: any) => ({
        key: c.cca2,
        label: c.name.common,
      }))
      .sort((a: any, b: any) => a.label.localeCompare(b.label));
  }

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Select
      isRequired={isRequired}
      name={name}
      label={t('contact.country.label')}
      labelPlacement="outside"
      placeholder="Select country"
      className="w-full"
      isLoading={isLoading}
      selectedKeys={value ? [value] : []}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0] as string;
        onChange?.(selected);
      }}
    >
      {countries.map((country) => (
        <SelectItem key={country.key}>{country.label}</SelectItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
