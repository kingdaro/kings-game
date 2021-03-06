import * as React from "react"
import { GameID } from "../models/game.model"
import { Layout } from "./layout.view"

export function GameNotFoundPage({ id }: { id: GameID }) {
  return (
    <Layout>
      <p>couldn't find game #{id}</p>
      <p>
        <a href="/games/create">make a new one?</a>
      </p>
    </Layout>
  )
}
