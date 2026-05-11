'use client';

import { Input, Select, SelectItem, Button, Divider } from '@heroui/react';
import { Search } from 'lucide-react';
import { JobFilterValues } from '..';
import { useI18n } from '@/i18n/I18nProvider';

export type Option = {
  key: string;
  label: string;
};

type JobFilterProps = {
  positions: Option[];
  locations: Option[];
  levels: Option[];

  value: JobFilterValues;
  onChange: (value: JobFilterValues) => void;
  onSubmit?: () => void;
};

const customSelect = {
  selectorIcon: 'text-black',
  label: 'text-white! font-medium tracking-wide',
  listbox:
    'max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent',
};
const JobSearchFilter = ({
  positions,
  locations,
  levels,
  value,
  onChange,
  onSubmit,
}: JobFilterProps) => {
  const { t } = useI18n();

  return (
    <div className="w-full bg-black/60 rounded-lg p-4 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 items-stretch lg:items-end">
        {/* Keyword */}
        <div className="min-w-60">
          <Input
            label={t('career.jobSearchFilter.keyword')}
            labelPlacement="outside"
            startContent={<Search size={18} className="text-black" />}
            placeholder={t('career.jobSearchFilter.jobPosition')}
            value={value.keyword}
            classNames={{
              label: 'text-white! font-medium tracking-wide',
            }}
            onChange={(e) => onChange({ ...value, keyword: e.target.value })}
          />
        </div>

        <Divider orientation="vertical" className="hidden lg:block w-px bg-gray-400" />

        {/* Language */}
        <Select
          label={t('career.jobSearchFilter.position')}
          labelPlacement="outside"
          placeholder={t('career.jobSearchFilter.selectPosition')}
          classNames={customSelect}
          selectedKeys={value.position ? [value.position] : []}
          onSelectionChange={(keys) => onChange({ ...value, position: [...keys][0] as string })}
          className="min-w-45"
        >
          {positions.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>

        <Divider orientation="vertical" className="hidden lg:block w-px bg-gray-400" />

        {/* Location */}
        <Select
          label={t('career.jobSearchFilter.location')}
          labelPlacement="outside"
          placeholder={t('career.jobSearchFilter.selectLocation')}
          classNames={customSelect}
          selectedKeys={value.location ? [value.location] : []}
          onSelectionChange={(keys) => onChange({ ...value, location: [...keys][0] as string })}
          className="min-w-45"
        >
          {locations.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>

        <Divider orientation="vertical" className="hidden lg:block w-px bg-gray-400" />

        {/* Level */}
        <Select
          label={t('career.jobSearchFilter.level')}
          labelPlacement="outside"
          placeholder={t('career.jobSearchFilter.selectLevel')}
          classNames={customSelect}
          selectedKeys={value.level ? [value.level] : []}
          onSelectionChange={(keys) => onChange({ ...value, level: [...keys][0] as string })}
          className="min-w-45"
        >
          {levels.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>

        <Divider orientation="vertical" className="hidden lg:block w-px bg-gray-400" />

        {/* Submit */}
        <div className="lg:self-end pt-6">
          <Button color="danger" className="px-8 w-full lg:w-auto" onPress={onSubmit}>
            {t('career.jobSearchFilter.search')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchFilter;
