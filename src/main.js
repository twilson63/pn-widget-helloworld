import Widget from './widget.svelte'

const el = document.getElementById('hello')
const dataset = el.dataset

const widget = new Widget({
  target: el,
  props: dataset
})