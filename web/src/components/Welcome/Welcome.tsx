import { Title, Text, Anchor } from '@mantine/core'

import classes from './Welcome.module.css'

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          ChartNectar
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter RedwoodJS project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + RedwoodJS integration
        follow{' '}
        <Anchor href="https://mantine.dev/guides/redwood/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  )
}
