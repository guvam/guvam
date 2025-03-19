import Link from "next/link";
import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const ContentSection: FC = () => (
  <Components id="content">
    <div className="Content">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and <mark>scrambled</mark> it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <Link href="/">Content link</Link>
      </p>
      <table>
        <thead>
          <tr>
            <td>First</td>
            <td>Second</td>
            <td>Third</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First</td>
            <td>Second</td>
            <td>Third</td>
          </tr>
          <tr>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
          </tr>
          <tr>
            <td>First</td>
            <td>Second</td>
            <td>Third</td>
          </tr>
          <tr>
            <td>First</td>
            <td>Second</td>
            <td>Third</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Components>
);
