require('minitest/autorun')
require('minitest/rg')
require('pry-byebug')
require_relative('./card_game')
require_relative('./card')

class TestRoom < Minitest::Test

def setup()
  @card1 = Card.new('hearts',1)
  @card2 = Card.new('spades', 8)
  @game1 = CardGame.new
end

def test_card_suit()
  assert_equal('hearts', @card1.suit)
end

def test_card_value()
  assert_equal(8, @card2.value)
end

def
  test_if_card_value_is_ace()
  assert_equal(true, @game1.check_for_ace(@card1))
end

def test_if_can_compare_cards_value()
  assert_equal(@card2, @game1.highest_card(@card1, @card2))
end

def
  test_if_can_count_total_value()
  assert_equal("You have a total of 9", CardGame.cards_total([@card1, @card2]))
end

end
