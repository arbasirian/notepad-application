import React from 'react';
import { Formik, Form } from 'formik';
import { Select as SelectWrapper } from 'antd';

import { Box, Flex, Submit, Select, DatePicker, NumberInput } from 'components';
import { StatsFilterModel } from 'types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { statsSelector } from 'redux/selectors';

type Props = {
  onSubmit: (data: StatsFilterModel) => void;
  loading: boolean;
};

export default ({ onSubmit, loading }: Props): JSX.Element => {
  const filterInfo = useSelector(statsSelector.filterInfo);

  return (
    <Formik
      initialValues={{
        date: filterInfo.date || moment(),
        terms_type: filterInfo.terms_type,
        chart_qty: filterInfo.chart_qty,
        per_page: filterInfo.per_page,
        terms_length: filterInfo.terms_length,
      }}
      validateOnMount
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Box as={Form} width="300px">
            <DatePicker
              formik={formik}
              showTime
              label="From Date"
              name="date"
              placeholder="From Date"
            />

            <Select
              formik={formik}
              label="Steps"
              name="chart_qty"
              type="text"
              placeholder="Steps of chart base on date"
              defaultValue={8}
              options={[
                { key: 4, title: '4 Step' },
                { key: 6, title: '6 Step' },
                { key: 8, title: '8 Step' },
                { key: 10, title: '10 Step' },
              ]}
            />
            <Select
              formik={formik}
              label="Page Size"
              name="per_page"
              type="text"
              placeholder="Items per page"
              defaultValue={50}
              options={[
                { key: 10, title: '10 / page' },
                { key: 20, title: '20 / page' },
                { key: 50, title: '50 / page' },
                { key: 100, title: '100 / page' },
              ]}
            />
            <Select
              formik={formik}
              label="Terms Type"
              name="terms_type"
              type="text"
              placeholder="Terms Type"
              defaultValue={'second'}
              options={[
                { key: 'second', title: 'Second' },
                { key: 'minute', title: 'Minute' },
                { key: 'hour', title: 'Hour' },
                { key: 'day', title: 'Day' },
              ]}
            />
            <Select
              formik={formik}
              label="Terms Length"
              name="terms_length"
              type="text"
              placeholder="Length of each term"
              defaultValue={5}
              options={[
                { key: 1, title: `1 ${formik.values.terms_type}` },
                { key: 5, title: `5 ${formik.values.terms_type}` },
                { key: 10, title: `10 ${formik.values.terms_type}` },
                { key: 20, title: `20 ${formik.values.terms_type}` },
                { key: 30, title: `30 ${formik.values.terms_type}` },
              ]}
            />

            <Flex justifyContent="flex-end">
              <Submit formik={formik} loading={loading} label="Filter" />
            </Flex>
          </Box>
        );
      }}
    </Formik>
  );
};
