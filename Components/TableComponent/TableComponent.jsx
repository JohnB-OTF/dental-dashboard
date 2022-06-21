//styles
import styles from "./tableComponent.module.scss"

//libraries
import { Table } from "@nextui-org/react"

//components

const TableComponent = () => {
  const columns = [
    {
      key: "campaign",
      label: "Campaign",
    },
    {
      key: "channel",
      label: "Channel",
    },
    {
      key: "leads",
      label: "Leads",
    },
    {
      key: "cpl",
      label: "CPL",
    },
    {
      key: "spend",
      label: "Spend",
    },
  ]
  const rows = [
    {
      key: "1",
      campaign: "Invisalign",
      channel: "Social",
      leads: "27",
      cpl: "$76.11",
      spend: "$2.005.04",
    },
    {
      key: "2",
      campaign: "Veneers",
      channel: "Search",
      leads: "15",
      cpl: "$76.11",
      spend: "$1.011.94",
    },
    {
      key: "3",
      campaign: "Acme",
      channel: "Social",
      leads: "8",
      cpl: "$86",
      spend: "$605.50",
    },
    {
      key: "4",
      campaign: "Acme",
      channel: "Social",
      leads: "8",
      cpl: "$86",
      spend: "$605.50",
    },
  ]

  return (
    <div className={styles.container}>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        TableColumnAlign="center"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(item) => (
            <Table.Row key={item.key}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={3}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </div>
  )
}

export default TableComponent
