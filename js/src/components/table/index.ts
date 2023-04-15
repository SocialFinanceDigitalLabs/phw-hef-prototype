import { render, BindingProps } from 'dom-component-helper';
import * as nunjucks from 'nunjucks';
import template from './table.html';

enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

const Table = (props: BindingProps) => {
  const { rows, headers } = JSON.parse(props.data);
  const env = new nunjucks.Environment();
  let element = props.domElement;

  let limit = 10;
  let offset = 0;
  let sortCol = headers[0].key;
  let order = Order.ASC;

  const filter = (rawRows: unknown[]) => {
    const newRows = rawRows.slice().sort((a: any, b: any) => {
      if (order === Order.ASC) {
        return a[sortCol] > b[sortCol] ? 1 : -1;
      }

      return a[sortCol] > b[sortCol] ? -1 : 1;
    });

    return newRows.slice(offset, offset + limit);
  };

  const pagination = () => {
    return {
      offset: offset + 1,
      limit: offset + 10,
      total: rows.length,
    };
  };

  const doRender = () => {
    const output = nunjucks.renderString(template, {
      rows: filter(rows),
      headers,
      pagination: pagination(),
      sortCol,
      order,
    });

    const body = document.createElement('div');
    body.innerHTML = output;

    element = render(element, body);

    element
      .querySelector('[data-paginate-left]')
      .addEventListener('click', () => {
        if (offset > 0) {
          offset -= limit;
        }

        doRender();
      });

    element
      .querySelector('[data-paginate-right]')
      .addEventListener('click', () => {
        if (offset < rows.length) {
          offset += limit;
        }

        doRender();
      });

    element.querySelectorAll('[data-sort]').forEach((el) => {
      const key = el.getAttribute('data-sort');
      el.addEventListener('click', (evt: any) => {
        if (key === sortCol) {
          order = order === Order.ASC ? Order.DESC : Order.ASC;
        } else {
          order = Order.ASC;
          sortCol = key;
        }

        offset = 0;

        doRender();
      });
    });
  };

  doRender();
};

export default Table;